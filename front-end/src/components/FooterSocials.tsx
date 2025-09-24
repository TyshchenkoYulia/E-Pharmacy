import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function FooterSocials() {
  return (
    <section className="mt-[20px] mr-[20px] tablet:mr-[32px] tablet:mt-[32px]">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.facebook.com/goITclub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            <FacebookIcon className="!text-[24px] tablet:!text-[44px] " />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/goitclub/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            <InstagramIcon className="!text-[24px] tablet:!text-[44px]" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/GoIT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            <YouTubeIcon className="!text-[24px] tablet:!text-[44px]" />
          </a>
        </li>
      </ul>
    </section>
  );
}
