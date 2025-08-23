export const mediaLiteracy: MediaLiteracyType[] = [
  {
    title: "Media-Literacy",
    icon: "/solution1.png",
    textColor: "#733718",
    description: (
      <>
        <li>Critical evaluation of information</li>
        <li>Recognizing manipulation and fake news</li>
      </>
    ),
    bannerGradient:
      "linear-gradient(119.43deg, #FEE9DC 46.87%, #FEF1DC 86.77%)",
  },
  {
    title: "Clickbait",
    icon: "/solution2.png",
    textColor: "#115044",
    description: (
      <>
        <li>A provocative or intriguing headline</li>
        <li>Deliberate distortion or exaggeration of facts</li>
      </>
    ),
    bannerGradient:
      "linear-gradient(135.07deg, #DCFEF2 54.28%, #DCFCFE 93.79%)",
  },
  {
    title: "Astroturfing ",
    icon: "/solution3.png",
    textColor: "#34114B",
    description: (
      <>
        <li>The imitation of widespread support or protest</li>
        <li>Manipulation of public opinion</li>
      </>
    ),
    bannerGradient:
      "linear-gradient(127.23deg, #DCDFFE 44.88%, #F6DCFE 92.96%)",
  },
  {
    title: "Scam",
    icon: "/solution4.png",
    textColor: "#004D0C",
    description: (
      <>
        <li>Bait in the form of a highly lucrative offer</li>
        <li>The use of fake websites, emails, or advertisements</li>
      </>
    ),
    bannerGradient:
      "linear-gradient(134.15deg, #FEF9DC -1.33%, #E4FEDC 93.13%)",
  },
];

type MediaLiteracyType = {
  title: string;
  icon: string;
  textColor: string;
  description: React.ReactNode;
  bannerGradient: string;
};
