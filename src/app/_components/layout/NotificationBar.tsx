import Link from "next/link";

export default function NotificationBar() {
  return (
    <div className="notification-bar fixed top-0 left-0 right-0 z-50 bg-[#FFB6D1] text-center py-2 px-4">
      <p className="notification-bar__text text-sm md:text-base text-white">
        Free delivery within Whanganui City Limits for all orders!{" "}
        <Link 
          href="/contact-us" 
          className="notification-bar__link underline hover:text-gray-100 transition-colors"
        >
          Contact us now
        </Link>
      </p>
    </div>
  );
}
