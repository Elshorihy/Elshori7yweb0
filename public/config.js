// Elshori7y Firebase bootstrap
// Firebase Web config (public client configuration)
const firebaseConfig = {
  apiKey: "AIzaSyB_QGDcj0N-vka-QiqCTvR5IbReMp4W8Yo",
  authDomain: "elshori7y-web.firebaseapp.com",
  databaseURL: "https://elshori7y-web-default-rtdb.firebaseio.com",
  projectId: "elshori7y-web",
  storageBucket: "elshori7y-web.firebasestorage.app",
  messagingSenderId: "575090467505",
  appId: "1:575090467505:web:e35e20a2a00d2359947890",
  measurementId: "G-1T82WPQJKK"
};

// Load Firebase v10 compat synchronously because the existing site is a
// single-file app and expects Firebase globals before its inline code runs.
document.write('<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"><\\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"><\\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"><\\/script>');

if (!window.firebase) {
  console.error('Elshori7y: Firebase SDK failed to load.');
} else {
  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    window.firebaseApp = firebase.app();
    window.auth = firebase.auth();
    window.db = firebase.firestore();

    // Compatibility aliases for the existing app code.
    window.onAuthStateChanged = (...args) => auth.onAuthStateChanged(...args);
    window.signInWithEmailAndPassword = (...args) => auth.signInWithEmailAndPassword(...args);
    window.createUserWithEmailAndPassword = (...args) => auth.createUserWithEmailAndPassword(...args);
    window.signOut = (...args) => auth.signOut(...args);

    window.collection = (dbRef, path) => dbRef.collection(path);
    window.doc = (dbRef, path, id) => id === undefined ? dbRef.doc(path) : dbRef.collection(path).doc(id);
    window.addDoc = (ref, data) => ref.add(data);
    window.setDoc = (ref, data, options) => options ? ref.set(data, options) : ref.set(data);
    window.updateDoc = (ref, data) => ref.update(data);
    window.deleteDoc = (ref) => ref.delete();
    window.getDoc = (ref) => ref.get();
    window.getDocs = (ref) => ref.get();
    window.onSnapshot = (ref, callback, error) => ref.onSnapshot(callback, error);
    window.query = (ref, ...constraints) => constraints.reduce((q, c) => c(q), ref);
    window.where = (field, op, value) => q => q.where(field, op, value);
    window.orderBy = (field, direction) => q => q.orderBy(field, direction);
    window.limit = (n) => q => q.limit(n);
    window.serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
    window.increment = (n) => firebase.firestore.FieldValue.increment(n);

    console.info('Elshori7y: Firebase initialized successfully.');
  } catch (error) {
    console.error('Elshori7y: Firebase initialization failed:', error);
  }
}
