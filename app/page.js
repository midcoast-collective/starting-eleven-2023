import ResponsivePlayer from "@/app/components/responsivePlayer";
import * as Page from "@/app/components/page";

export const metadata = {
  title: "Starting Eleven",
  description: "Setting the standard for soccer storytelling.",
};

export default function HomePage() {
  return (
    <main>
      <Page.IntroWrap>
        <ResponsivePlayer
          desktop="https://vimeo.com/854736625"
          mobile="https://vimeo.com/857607311"
        />
      </Page.IntroWrap>
    </main>
  );
}
