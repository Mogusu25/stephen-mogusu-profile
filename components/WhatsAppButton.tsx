
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254720028762?text=Hello%20Stephen%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Stephen on WhatsApp"
      title="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d] md:bottom-8 md:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.01 3C8.84 3 3.01 8.82 3.01 15.99c0 2.29.6 4.53 1.74 6.5L3 29l6.69-1.75a13 13 0 0 0 6.32 1.62h.01C23.18 28.87 29 23.05 29 15.88 29 8.71 23.18 3 16.01 3Zm0 23.68c-1.91 0-3.78-.51-5.41-1.48l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.64 10.64 0 0 1-1.64-5.75c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.15-.15.32-.36.48-.54.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
