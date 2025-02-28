import { getApps, initializeApp, getApp, App, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app: App;

if (!getApps().length) {
  app = initializeApp({
    credential: cert(
      JSON.parse(
        Buffer.from(
          process.env.FIREBASE_SERVICE_KEY as string,
          "base64"
        ).toString("utf8")
      )
    ),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };
