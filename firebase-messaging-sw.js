/* Service worker: nhận thông báo đẩy khi trang Sổ Lớp Học đã đóng / điện thoại đang khóa màn hình.
   File này phải nằm cùng thư mục với index.html trên GitHub. */
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAf-r6NMIgLM74PthyFKuHMYtfiICvIF8M",
  authDomain: "so-dau-bai-7723e.firebaseapp.com",
  projectId: "so-dau-bai-7723e",
  storageBucket: "so-dau-bai-7723e.firebasestorage.app",
  messagingSenderId: "680926417131",
  appId: "1:680926417131:web:c136d840c76a48f9cfeeae"
});

// Có dòng này thì thông báo gửi từ Worker sẽ tự hiện ra ở nền, bấm vào sẽ mở lại trang (link do Worker gửi kèm).
firebase.messaging();

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
