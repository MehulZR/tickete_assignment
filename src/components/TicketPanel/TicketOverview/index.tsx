import Link from "next/link";

export default function TicketOverview() {
  return (
    <div className="w-full">
      <p className="text-lg font-semibold text-textPrimary">Tickets Overview</p>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between">
          <span>&lt;pax type&gt;</span>
          <span>&lt;price&gt;</span>
        </li>
        <li className="flex items-center justify-between">
          <span>&lt;pax type&gt;</span>
          <span>&lt;price&gt;</span>
        </li>
        <li className="flex items-center justify-between">
          <span>&lt;fee&gt;</span>
          <span>&lt;price&gt;</span>
        </li>
        <li className="flex items-center justify-between text-Green">
          <span>&lt;discount applied&gt;</span>
          <span>&lt; - price&gt;</span>
        </li>
        <Link
          href="#"
          className="flex items-center gap-2 py-6 border-border text-Green border-y"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.75 9.91409L10.5859 1.75003C10.4414 1.60424 10.263 1.49653 10.0667 1.43654C9.87039 1.37656 9.66226 1.36616 9.46094 1.40628L3.15625 2.67191C3.0367 2.69578 2.9269 2.75452 2.8407 2.84073C2.75449 2.92693 2.69575 3.03673 2.67188 3.15628L1.40625 9.46097C1.36613 9.66229 1.37653 9.87042 1.43651 10.0667C1.4965 10.2631 1.60421 10.4415 1.75 10.586L9.91406 18.75C10.0296 18.8667 10.1671 18.9594 10.3186 19.0226C10.4701 19.0858 10.6327 19.1183 10.7969 19.1183C10.9611 19.1183 11.1236 19.0858 11.2752 19.0226C11.4267 18.9594 11.5642 18.8667 11.6797 18.75L18.75 11.6797C18.8667 11.5642 18.9593 11.4267 19.0225 11.2752C19.0858 11.1237 19.1183 10.9611 19.1183 10.7969C19.1183 10.6327 19.0858 10.4702 19.0225 10.3186C18.9593 10.1671 18.8667 10.0296 18.75 9.91409ZM6.5625 7.50003C6.37708 7.50003 6.19582 7.44505 6.04165 7.34203C5.88748 7.23902 5.76732 7.0926 5.69636 6.9213C5.62541 6.74999 5.60684 6.56149 5.64301 6.37963C5.67919 6.19778 5.76848 6.03073 5.89959 5.89962C6.0307 5.76851 6.19775 5.67922 6.3796 5.64304C6.56146 5.60687 6.74996 5.62544 6.92127 5.69639C7.09257 5.76735 7.23899 5.88751 7.342 6.04168C7.44502 6.19586 7.5 6.37711 7.5 6.56253C7.5 6.81117 7.40123 7.04963 7.22541 7.22544C7.0496 7.40126 6.81114 7.50003 6.5625 7.50003Z"
              fill="#006642"
            />
          </svg>
          <span className="text-sm font-semibold underline">
            Have a promo code?
          </span>
        </Link>
      </ul>
      <div className="my-6">
        <div className="flex items-center justify-between font-semibold text-textPrimary">
          <span>Total</span>
          <span>&lt;price&gt;</span>
        </div>
        <span className="mt-2 text-xs underline text-textSecondary">
          You will pay in &lt;currency&gt;
        </span>
      </div>
      <div className="p-5 rounded bg-[#F5F5F5]">
        <p className="text-sm font-semibold text-textPrimary">
          Free cancellation
        </p>
        <p className="text-textSecondary">
          Cancel before &lt;date&gt; for a full refund
        </p>
      </div>
    </div>
  );
}
