// PDF Imports
import Emily from "./pdf/Emily.pdf";
import Softly from "./pdf/Softly.pdf";
import Witch_Hunt from "./pdf/Witch_Hunt.pdf";
import Stablemates from "./pdf/Stablemates.pdf";
import Ill_Be_Seeing_You from "./pdf/Ill_Be_Seeing_You.pdf";
import Second_Balcony_Jump from "./pdf/Second_Balcony_Jump.pdf";
import It_Could_Happen_To_You from "./pdf/It_Could_Happen_To_You.pdf";
import Peter_Bernstein_Lady_Bird from "./pdf/Peter_Bernstein_Lady_Bird.pdf";
import Wes_Montgomery_Satin_Doll from "./pdf/Wes_Montgomery_Satin_Doll.pdf";
import Miles_Davis_Milestones_old from "./pdf/Miles_Davis_Milestones_old.pdf";

export interface VideoInterface {
  id: string;
  url: string;
  image: string;
  title: string;
  default: boolean,
  pdf: string | undefined;
}

export interface AllVideosInterface {
  [key: string]: VideoInterface[];
}

// List of transcription videos that are passed to video player
export const allVideos: AllVideosInterface = {
  "Live": [
    {
      id: "A-8_s_-AYUM",
      default: false,
      image: "https://img.youtube.com/vi/A-8_s_-AYUM/maxresdefault.jpg",
      title: "Girl From Ipanema (Jobim)",
      url: "https://www.youtube.com/watch?v=A-8_s_-AYUM",
      pdf: undefined,
    },
    {
      id: "oH0bN-_YZd4",
      default: true,
      image: "https://img.youtube.com/vi/oH0bN-_YZd4/maxresdefault.jpg",
      title: "It Could Happen To You (Van Heusen)",
      url: "https://www.youtube.com/watch?v=oH0bN-_YZd4",
      pdf: undefined,
    },
    {
      id: "wTY8S_s-z-k",
      default: false,
      image: "https://img.youtube.com/vi/wTY8S_s-z-k/maxresdefault.jpg",
      title: "Anthropology (Parker)",
      url: "https://www.youtube.com/watch?v=wTY8S_s-z-k",
      pdf: undefined,
    },
    {
      id: "QC0a46cX5Sw",
      default: false,
      image: "https://img.youtube.com/vi/QC0a46cX5Sw/maxresdefault.jpg",
      title: "Lady Be Good (Gerswhin)",
      url: "https://www.youtube.com/watch?v=QC0a46cX5Sw",
      pdf: undefined,
    },
    {
      id: "Ka9EV91Yku8",
      default: false,
      image: "https://img.youtube.com/vi/Ka9EV91Yku8/maxresdefault.jpg",
      title: "Out of Nowhere (Green)",
      url: "https://www.youtube.com/watch?v=Ka9EV91Yku8",
      pdf: undefined,

    },
    {
      id: "kIeHv78cMn8",
      default: false,
      image: "https://img.youtube.com/vi/kIeHv78cMn8/maxresdefault.jpg",
      title: "Blues by Five (Garland)",
      url: "https://www.youtube.com/watch?v=kIeHv78cMn8",
      pdf: undefined,
    },
  ],
  "Transcriptions": [
    {
      default: true,
      id: "LJc4CPRfFoM",
      image: "https://img.youtube.com/vi/LJc4CPRfFoM/maxresdefault.jpg",
      title: "Steve Masakowski - Emily",
      url: "https://www.youtube.com/watch?v=LJc4CPRfFoM",
      pdf: Emily,
    },
    {
      id: "eZyFPcJjOkA",
      default: false,
      image: "https://img.youtube.com/vi/eZyFPcJjOkA/maxresdefault.jpg",
      title: "Dexter Gordon - Second Balcony Jump",
      url: "https://www.youtube.com/watch?v=eZyFPcJjOkA",
      pdf: Second_Balcony_Jump,
    },
    {
      id: "z3FH5_C_pzo",
      default: false,
      image: "https://img.youtube.com/vi/z3FH5_C_pzo/maxresdefault.jpg",
      title: "Miles Davis - Milestones (old)",
      url: "https://www.youtube.com/watch?v=z3FH5_C_pzo",
      pdf: Miles_Davis_Milestones_old,
    },
    {
      id: "nCrCLeIJzm8",
      default: false,
      image: "https://img.youtube.com/vi/nCrCLeIJzm8/maxresdefault.jpg",
      title: "Lee Morgan - Stablemates",
      url: "https://www.youtube.com/watch?v=nCrCLeIJzm8",
      pdf: Stablemates,
    },
    {
      id: "Bq5qf50d-cI",
      default: false,
      image: "https://img.youtube.com/vi/Bq5qf50d-cI/maxresdefault.jpg",
      title: "Herbie Hancock - Witch Hunt",
      url: "https://www.youtube.com/watch?v=Bq5qf50d-cI",
      pdf: Witch_Hunt,
    },
    {
      id: "gIe8VBxFGOM",
      default: false,
      image: "https://img.youtube.com/vi/gIe8VBxFGOM/maxresdefault.jpg",
      title: "Kurt Rosenwinkel - I'll Be Seeing You",
      url: "https://www.youtube.com/watch?v=gIe8VBxFGOM",
      pdf: Ill_Be_Seeing_You,
    },
    {
      id: "lYYy3sZMRwQ",
      default: false,
      image: "https://img.youtube.com/vi/lYYy3sZMRwQ/maxresdefault.jpg",
      title: "Wes Montgomery - Montgomeryland Funk",
      url: "https://www.youtube.com/watch?v=lYYy3sZMRwQ",
      pdf: undefined,
    },
    {
      id: "lGysbDsvNOU",
      default: false,
      image: "https://img.youtube.com/vi/lGysbDsvNOU/maxresdefault.jpg",
      title: "Wes Montgomery - Satin Doll",
      url: "https://www.youtube.com/watch?v=lGysbDsvNOU",
      pdf: Wes_Montgomery_Satin_Doll,
    },
    {
      id: "uBfEOiovs9g",
      default: false,
      image: "https://img.youtube.com/vi/uBfEOiovs9g/maxresdefault.jpg",
      title: "Bill Hardman - Softly",
      url: "https://www.youtube.com/watch?v=uBfEOiovs9g",
      pdf: Softly,
    },
    {
      id: "rW97jsCq9A8",
      default: false,
      image: "https://img.youtube.com/vi/rW97jsCq9A8/maxresdefault.jpg",
      title: "Miles Davis - It Could Happen To You",
      url: "https://www.youtube.com/watch?v=rW97jsCq9A8",
      pdf: It_Could_Happen_To_You,
    },
    {
      id: "7Dy6AteuOHE",
      default: false,
      image: "https://img.youtube.com/vi/7Dy6AteuOHE/maxresdefault.jpg",
      title: "Peter Bernstein - Lady Bird",
      url: "https://www.youtube.com/watch?v=7Dy6AteuOHE",
      pdf: Peter_Bernstein_Lady_Bird,
    },
  ],
  "Studio": [
    {
      id: "mkLl_BpGbeU",
      default: true,
      image: "https://img.youtube.com/vi/mkLl_BpGbeU/maxresdefault.jpg",
      title: "Ritual (James Easter)",
      url: "https://www.youtube.com/watch?v=mkLl_BpGbeU",
      pdf: undefined,
    },
    {
      id: "t51AQyXH3I4",
      default: false,
      image: "https://img.youtube.com/vi/t51AQyXH3I4/maxresdefault.jpg",
      title: "Beatrice (Sam Rivers)",
      url: "https://www.youtube.com/watch?v=t51AQyXH3I4",
      pdf: undefined,
    },
    {
      id: "-28qjhW5Wzw",
      default: false,
      image: "https://img.youtube.com/vi/-28qjhW5Wzw/maxresdefault.jpg",
      title: "Peace (Horace Silver)",
      url: "https://www.youtube.com/watch?v=-28qjhW5Wzw",
      pdf: undefined,
    },
  ],
}
