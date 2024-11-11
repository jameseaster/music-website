// PDF Imports
import Emily from "./pdf/Emily.pdf";
import Softly from "./pdf/Softly.pdf";
import Cool_Blues from "./pdf/Cool_Blues.pdf";
import Witch_Hunt from "./pdf/Witch_Hunt.pdf";
import Stablemates from "./pdf/Stablemates.pdf";
import Ill_Be_Seeing_You from "./pdf/Ill_Be_Seeing_You.pdf";
import Second_Balcony_Jump from "./pdf/Second_Balcony_Jump.pdf";
import It_Could_Happen_To_You from "./pdf/It_Could_Happen_To_You.pdf";
import Peter_Bernstein_Lady_Bird from "./pdf/Peter_Bernstein_Lady_Bird.pdf";
import Wes_Montgomery_Satin_Doll from "./pdf/Wes_Montgomery_Satin_Doll.pdf";
import Miles_Davis_Milestones_old from "./pdf/Miles_Davis_Milestones_old.pdf";

export interface VideoInterface {
  id: string,
  url: string;
  image: string;
  title: string;
  default: boolean,
  pdf: string | undefined;
}

export interface AllVideosInterface {
  [key: string]: VideoInterface[];
}

const array = new Uint32Array(10);
console.log(crypto.getRandomValues(array));

// List of transcription videos that are passed to video player
export const allVideos: AllVideosInterface = {
  "Live": [
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/A-8_s_-AYUM/maxresdefault.jpg",
      title: "Girl From Ipanema (Jobim)",
      url: "https://www.youtube.com/watch?v=A-8_s_-AYUM",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: true,
      image: "https://img.youtube.com/vi/oH0bN-_YZd4/maxresdefault.jpg",
      title: "It Could Happen To You (Van Heusen)",
      url: "https://www.youtube.com/watch?v=oH0bN-_YZd4",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/wTY8S_s-z-k/maxresdefault.jpg",
      title: "Anthropology (Parker)",
      url: "https://www.youtube.com/watch?v=wTY8S_s-z-k",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/QC0a46cX5Sw/maxresdefault.jpg",
      title: "Lady Be Good (Gerswhin)",
      url: "https://www.youtube.com/watch?v=QC0a46cX5Sw",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/Ka9EV91Yku8/maxresdefault.jpg",
      title: "Out of Nowhere (Green)",
      url: "https://www.youtube.com/watch?v=Ka9EV91Yku8",
      pdf: undefined,

    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/kIeHv78cMn8/maxresdefault.jpg",
      title: "Blues by Five (Garland)",
      url: "https://www.youtube.com/watch?v=kIeHv78cMn8",
      pdf: undefined,
    },
  ],
  "Transcriptions": [
    {
      id: String(crypto.getRandomValues(array)),
      default: true,
      image: "https://img.youtube.com/vi/_meKYiOEe8Y/maxresdefault.jpg",
      title: "Charlie Parker - Cool Blues",
      url: "https://www.youtube.com/watch?v=_meKYiOEe8Y",
      pdf: Cool_Blues,
    },
    {
      default: false,
      id: String(crypto.getRandomValues(array)),
      image: "https://img.youtube.com/vi/LJc4CPRfFoM/maxresdefault.jpg",
      title: "Steve Masakowski - Emily",
      url: "https://www.youtube.com/watch?v=LJc4CPRfFoM",
      pdf: Emily,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/eZyFPcJjOkA/maxresdefault.jpg",
      title: "Dexter Gordon - Second Balcony Jump",
      url: "https://www.youtube.com/watch?v=eZyFPcJjOkA",
      pdf: Second_Balcony_Jump,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/z3FH5_C_pzo/maxresdefault.jpg",
      title: "Miles Davis - Milestones (old)",
      url: "https://www.youtube.com/watch?v=z3FH5_C_pzo",
      pdf: Miles_Davis_Milestones_old,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/nCrCLeIJzm8/maxresdefault.jpg",
      title: "Lee Morgan - Stablemates",
      url: "https://www.youtube.com/watch?v=nCrCLeIJzm8",
      pdf: Stablemates,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/Bq5qf50d-cI/maxresdefault.jpg",
      title: "Herbie Hancock - Witch Hunt",
      url: "https://www.youtube.com/watch?v=Bq5qf50d-cI",
      pdf: Witch_Hunt,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/gIe8VBxFGOM/maxresdefault.jpg",
      title: "Kurt Rosenwinkel - I'll Be Seeing You",
      url: "https://www.youtube.com/watch?v=gIe8VBxFGOM",
      pdf: Ill_Be_Seeing_You,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/lYYy3sZMRwQ/maxresdefault.jpg",
      title: "Wes Montgomery - Montgomeryland Funk",
      url: "https://www.youtube.com/watch?v=lYYy3sZMRwQ",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/lGysbDsvNOU/maxresdefault.jpg",
      title: "Wes Montgomery - Satin Doll",
      url: "https://www.youtube.com/watch?v=lGysbDsvNOU",
      pdf: Wes_Montgomery_Satin_Doll,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/uBfEOiovs9g/maxresdefault.jpg",
      title: "Bill Hardman - Softly",
      url: "https://www.youtube.com/watch?v=uBfEOiovs9g",
      pdf: Softly,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/rW97jsCq9A8/maxresdefault.jpg",
      title: "Miles Davis - It Could Happen To You",
      url: "https://www.youtube.com/watch?v=rW97jsCq9A8",
      pdf: It_Could_Happen_To_You,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/7Dy6AteuOHE/maxresdefault.jpg",
      title: "Peter Bernstein - Lady Bird",
      url: "https://www.youtube.com/watch?v=7Dy6AteuOHE",
      pdf: Peter_Bernstein_Lady_Bird,
    },
  ],
  "Studio": [
    {
      id: String(crypto.getRandomValues(array)),
      default: true,
      image: "https://img.youtube.com/vi/mkLl_BpGbeU/maxresdefault.jpg",
      title: "Ritual (James Easter)",
      url: "https://www.youtube.com/watch?v=mkLl_BpGbeU",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/t51AQyXH3I4/maxresdefault.jpg",
      title: "Beatrice (Sam Rivers)",
      url: "https://www.youtube.com/watch?v=t51AQyXH3I4",
      pdf: undefined,
    },
    {
      id: String(crypto.getRandomValues(array)),
      default: false,
      image: "https://img.youtube.com/vi/-28qjhW5Wzw/maxresdefault.jpg",
      title: "Peace (Horace Silver)",
      url: "https://www.youtube.com/watch?v=-28qjhW5Wzw",
      pdf: undefined,
    },
  ],
}
