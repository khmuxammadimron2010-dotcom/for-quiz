// Database Management for Quiz Scores
class QuizDatabase {
    constructor() {
        this.dbName = 'QuizMasterDB';
        this.storeName = 'scores';
        this.db = null;
        this.initDB();
    }

    // Initialize the database
    initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);

            request.onerror = () => {
                console.error('Database failed to open');
                reject(request.error);
            };

            request.onsuccess = () => {
                this.db = request.result;
                console.log('Database opened successfully');
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
                    objectStore.createIndex('name', 'name', { unique: false });
                    objectStore.createIndex('score', 'score', { unique: false });
                    objectStore.createIndex('quiz', 'quiz', { unique: false });
                    objectStore.createIndex('date', 'date', { unique: false });
                    console.log('Database setup complete');
                }
            };
        });
    }

    // Save a quiz score
    saveScore(name, score, totalQuestions, quizTitle) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);

            const scoreData = {
                name: name.trim(),
                score: score,
                totalQuestions: totalQuestions,
                percentage: (score / totalQuestions) * 100,
                quizTitle: quizTitle,
                date: new Date().toISOString(),
                timestamp: Date.now()
            };

            const request = objectStore.add(scoreData);

            request.onsuccess = () => {
                console.log('Score saved successfully');
                resolve(scoreData);
            };

            request.onerror = () => {
                console.error('Error saving score');
                reject(request.error);
            };
        });
    }

    // Get all scores
    getAllScores() {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // Get scores for a specific quiz
    getScoresByQuiz(quizTitle) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const index = objectStore.index('quiz');
            const request = index.getAll(quizTitle);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // Get top scores
    getTopScores(limit = 10) {
        return new Promise((resolve, reject) => {
            this.getAllScores()
                .then(scores => {
                    const sorted = scores.sort((a, b) => {
                        if (b.score !== a.score) {
                            return b.score - a.score;
                        }
                        return new Date(b.date) - new Date(a.date);
                    });
                    resolve(sorted.slice(0, limit));
                })
                .catch(reject);
        });
    }

    // Get top scores for a specific quiz
    getTopScoresByQuiz(quizTitle, limit = 5) {
        return new Promise((resolve, reject) => {
            this.getScoresByQuiz(quizTitle)
                .then(scores => {
                    const sorted = scores.sort((a, b) => {
                        if (b.score !== a.score) {
                            return b.score - a.score;
                        }
                        return new Date(b.date) - new Date(a.date);
                    });
                    resolve(sorted.slice(0, limit));
                })
                .catch(reject);
        });
    }

    // Get user's best score
    getUserBestScore(name) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const index = objectStore.index('name');
            const request = index.getAll(name.trim());

            request.onsuccess = () => {
                const scores = request.result;
                if (scores.length === 0) {
                    resolve(null);
                } else {
                    const best = scores.reduce((max, current) => 
                        current.score > max.score ? current : max
                    );
                    resolve(best);
                }
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // Delete all scores (optional - for testing)
    deleteAllScores() {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.clear();

            request.onsuccess = () => {
                console.log('All scores deleted');
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    // Export scores as JSON
    exportScores() {
        return this.getAllScores();
    }

    // Import scores from JSON
    importScores(scoresArray) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);

            scoresArray.forEach(score => {
                objectStore.add(score);
            });

            transaction.oncomplete = () => {
                console.log('Scores imported successfully');
                resolve();
            };

            transaction.onerror = () => {
                reject(transaction.error);
            };
        });
    }
}

// Initialize database globally
const quizDB = new QuizDatabase();
