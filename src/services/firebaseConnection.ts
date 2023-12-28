import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFPfT9CZpt-XyhBTJmnpSPV2vEij10qIA",
  authDomain: "webcarros-8cbd8.firebaseapp.com",
  projectId: "webcarros-8cbd8",
  storageBucket: "webcarros-8cbd8.appspot.com",
  messagingSenderId: "1038866414780",
  appId: "1:1038866414780:web:cc5a7ac59e66e94ab024b9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };
