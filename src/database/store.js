import { writable } from "svelte/store";

const data = {
  //
  //
  //
  //
  //
  // // // // // // // // // //......................  DAILY  .................// // // // // // // // //
  //
  //
  //
  //
  //

  daily: [
    {
      id: "02",
      examId: "phx1_1FAIpQLSfmvL1KtDtwvjQ3gZscz2HQyjNUFR8yCs8luoAV1Arawqj1g",
      subId: "phx1",
      courseName: "DU A Special",
      subject: "Physics 1st Paper",
      exam: "Daily",
      type: "MCQ",
      marks: 25,
      syllabus: "Chapter 4",
      time: "15 mins",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfmvL1KtDt_wvjQ3gZscz2HQyjNUFR8yCs8luoAV1Arawqj1g/viewform",
      answerLink: null,
      standings: null,
    },
    {
      id: "01 + 02",
      examId: "zoo_1FAIpQLScIQjkUz0zWESCKSjcPqoitru7NTLtgjcTbWOHdXFgH-WNXg",
      subId: "zoo",
      courseName: "Medical Standard",
      subject: "Biology 2nd Paper",
      exam: "daily",
      type: "MCQ",
      marks: 50,
      syllabus: "Chapter 4",
      time: "25 mins",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScIQjkUz0zWESCKSjcPqoi_tru7NTLtgjcTbWOHdXFgH-WNXg/viewform",
      answerLink: null,
      standings: null,
    },
  ],

  //
  //
  //
  //
  //
  // // // // // // // // // //......................  HSC  .................// // // // // // // // //
  //
  //
  //
  //
  //

  hsc: {
    full: {
      course: "Full Preparation",
      //
      // HSC FULL PHX 1
      //
      phx1: [],
      //
      // HSC FULL PHX 2
      //
      phx2: [],
      //
      // HSC FULL CHEM 1
      //
      chem1: [],
      //
      // HSC FULL CHEM 2
      //
      chem2: [],
      //
      // HSC FULL HM 2
      //
      hm2: [
        {
          id: "01",
          subject: "Higher Math 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 50,
          syllabus: "Full Book",
          time: "30 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP3hsJw3n_FSgqbt9ZN4vz7bsoMB5UFw3eSsZ4yka5H03GPQ/viewform",
          answerLink: null,
          standings: null,
        },
      ],
      //
      // HSC FULL HM 1
      //
      hm1: [
        {
          id: "01",
          subject: "Higher Math 1st Paper",
          exam: "Paper Final",
          type: "MCQ",
          marks: 50,
          syllabus: "Full Book",
          time: "30 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdP3hsJw3n_FSgqbt9ZN4vz7bsoMB5UFw3eSsZ4yka5H03GPQ/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdP3hsJw3n_FSgqbt9ZN4vz7bsoMB5UFw3eSsZ4yka5H03GPQ/viewform",
          standings: [
            { name: "Tanvirul Islam Sajin", marks: 30 },
            { name: "Portgas D. Ace", marks: 29 },
            { name: "Monkey D. Luffy", marks: 28 },
          ],
        },
      ],
      //
      // HSC FULL BIO 2
      //
      zoo: [],
      //
      // HSC FULL BIO 1
      //
      bot: [],
      coursePath: "full",
    },
    revision: {
      course: "Revision",
      phx1: [],
      phx2: [],
      chem1: [],
      chem2: [],
      hm2: [],
      hm1: [],
      zoo: [],
      bot: [],
      coursePath: "revision",
    },
  },

  //
  //
  //
  //
  //
  // // // // // // // // // //......................  ADMISSION  ...................// // // // // // // // //
  //
  //
  //
  //
  //

  admission: {
    EngineeringStandard: {
      course: "Engineering Standard",
      //
      // ENG PHX 1
      //
      phx1: [
        {
          id: "01",
          subject: "Physics 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 20,
          syllabus: "Chapter 2",
          time: "15 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdGJCd2DMH73tdWK5ONxatDOVGP-s2Vlft9yymtxVUmOHcHWw/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdGJCd2DMH73tdWK5ONxatDOVGP-s2Vlft9yymtxVUmOHcHWw/viewscore?viewscore=AE0zAgAd6NON1_LosH7UzjWjm2TL108KLSICda-fR55-x4izc64wP7I16Jlz2_Vh8MFl5JA",
          standings: [
            { name: "Archita Nath", marks: 18 },
            { name: "Shihab Uddin", marks: 17 },
            { name: "Nachiketa", marks: 15 },
            { name: "Riyad", marks: 15 },
            { name: "Shah Rhaiyan", marks: 14 },
          ],
        },
        {
          id: "02",
          subject: "Physics 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 55,
          syllabus: "Chapter 4",
          time: "25 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfXkQsv9ISAvay6mqUQP-0Szpxagsdv0l2xxCDUz6-vYGiRRg/viewform",
          answerLink: null,
          standings: null,
        },
      ],
      //
      // ENG PHX 2
      //
      phx2: [],
      //
      // ENG CHEM 1
      //
      chem1: [],
      //
      // ENG CHEM 2
      //
      chem2: [],
      //
      // ENG HM 2
      //
      hm2: [],
      //
      // ENG HM 1
      //
      hm1: [
        {
          id: "01",
          subject: "Higher Math 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 55,
          syllabus: "Chapter 3",
          time: "25 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSc3KlZNHyfBEJcnJkhRwxNdtwOsUBYk-CTxBXz8KPtfE9Ni6Q/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSc3KlZNHyfBEJcnJkhRwxNdtwOsUBYk-CTxBXz8KPtfE9Ni6Q/viewscore?viewscore=AE0zAgD4s9yyI5kNJ3rQJiShVd4GvUqwQcbcZs3ak9-RCWdAoIbaF9r2jRI_Hyj2StCTdyU",
          standings: [
            { name: "Protik Dey, marks", marks: 41 },
            { name: "Nazil", marks: 39 },
            { name: "Diba", marks: 35 },
            { name: "Shihab Uddin", marks: 35 },
            { name: "Wasif", marks: 33 },
          ],
        },
      ],
      coursePath: "EngineeringStandard",
    },

    //
    //
    // // // // // //.............. MED STANDARD ..............// // // // //
    //
    //

    MedicalStandard: {
      course: "Medical Standard",
      //
      // MED PHX 1
      //
      phx1: [],
      //
      // MED PHX 2
      //
      phx2: [],
      //
      // MED CHEM 1
      //
      chem1: [
        {
          id: "01",
          subject: "Chemistry 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 55,
          syllabus: "Chapter 3",
          time: "25 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdPBWtFOkz85hd6VqioyileWlLhSNCz3Jcew4vtXkkh7aoorw/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSdPBWtFOkz85hd6VqioyileWlLhSNCz3Jcew4vtXkkh7aoorw/viewscore?viewscore=AE0zAgC_G-du0N2Y_YQolSgJ5oR_AA-PoFEKgAEoLkqKVsd_CAtemV6zjMJqE_ZEGxQq_lc",
          standings: [
            { name: "Ayesha", marks: 37 },
            { name: "Noboni", marks: 37 },
            { name: "Numan", marks: 35 },
            { name: "Johura", marks: 31 },
            { name: "Rohan", marks: 31 },
          ],
        },
      ],
      //
      // MED CHEM 2
      //
      chem2: [],
      //
      // MED BIO 2
      //
      zoo: [
        {
          id: "01 + 02",
          subject: "Biology 2nd Paper",
          exam: "daily",
          type: "MCQ",
          marks: 50,
          syllabus: "Chapter 4",
          time: "25 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScIQjkUz0zWESCKSjcPqoi_tru7NTLtgjcTbWOHdXFgH-WNXg/viewform",
          answerLink: null,
          standings: null,
        },
      ],
      //
      // MED BIO 1
      //
      bot: [],
      coursePath: "MedicalStandard",
    },

    VarsityStandard: {
      course: "Varsity Standard",
      phx1: [],
      phx2: [],
      chem1: [],
      chem2: [],
      zoo: [],
      bot: [],
      hm2: [],
      hm1: [],
      coursePath: "VarsityStandard",
    },

    //
    //
    // // // // // //.............. DU SPECIAL ..............// // // // //
    //
    //

    DUSpecial: {
      course: "DU A-Unit Special",
      //
      // DU PHX 1
      //
      phx1: [],
      //
      // DU PHX 2
      //
      phx2: [],
      //
      // DU CHEM 1
      //
      chem1: [],
      //
      // DU CHEM 2
      //
      chem2: [],
      //
      // DU HM 2
      //
      hm2: [],
      //
      // DU HM 1
      //
      hm1: [
        {
          id: "01",
          subject: "Higher Math 1st Paper",
          exam: "random",
          type: "MCQ",
          marks: 25,
          syllabus: "Chapter 3",
          time: "20 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfiCMw2D7tO0P0IcIe2T_KKLP7gComvqoV38E2XrIOKmKA9QA/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfiCMw2D7tO0P0IcIe2T_KKLP7gComvqoV38E2XrIOKmKA9QA/viewscore?viewscore=AE0zAgDd_T6rIlNfsbXCeIeeRpithc6qAgyL0lJAvUOGpyqmuTQhFs3-kI1nCX0VqGM1-iA",
          standings: [
            { name: "Protik", marks: 20 },
            { name: "Anuj", marks: 17 },
            { name: "Sumaiya", marks: 17 },
            { name: "Diba", marks: 16 },
            { name: "Nobonita", marks: 16 },
          ],
        },
      ],
      //
      // DU BIO 2
      //
      zoo: [
        {
          id: "01",
          subject: "Biology 2nd Paper",
          exam: "random",
          type: "MCQ",
          marks: 25,
          syllabus: "Chapter 4",
          time: "15 mins",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSfctZq38nf3p01QaKi1cQkbZiyOYKnNq5-nvZROUKew5kiGZA/viewform",
          answerLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfctZq38nf3p01QaKi1cQkbZiyOYKnNq5-nvZROUKew5kiGZA/viewscore?viewscore=AE0zAgBZ1O64EynQzxHVrUQI-PvpGEFNaGYzsyGinjetXg-ijm-zU3H-XPFn9TUrjugJLpc",
          standings: [
            { name: "Asmaul Husna Brishty", marks: 25 },
            { name: "Mitu", marks: 24 },
            { name: "Noboni", marks: 24 },
            { name: "Urmi", marks: 23 },
            { name: "Nirban", marks: 23 },
          ],
        },
      ],
      //
      // DU BIO 1
      //
      bot: [],
      coursePath: "DUSpecial",
    },
  },

  //
  //
  //
  //
  //
  // // // // // // // // // //...................... BLOG .................// // // // // // // // //
  //
  //
  //
  //
  //

  blog: [
    {
      topic: "ANNOUNCEMENT",
      head: "Aalo 3MinuteTutor Contest",
      body: "Ahoy there! আশা করি সবাই ভালো আছো! আজ থেকে আমরা এই গ্রুপে একটি ক্যাম্পেইন চালু করতে যাচ্ছি, যার নাম - #3MinuteTutor! প্রতি সপ্তাহে আমরা তোমাদের দুটো টপিক আর দুটো সমস্যা দেবো। তোমরা এই চারটির যে কোনোটি নিয়ে একটি এক্সপ্লেইনার ভিডিও বানাবে। আমরা সপ্তাহ শেষে দুটি করে মোট আটটি ভিডিও বাছাই করে একটি রিল বানাবো। এই পোস্টের সাথের ছবিগুলোতে এবারের সপ্তাহের টপিক ও সমস্যাগুলো পাবে।",
      fbLink:
        "https://www.facebook.com/groups/aaloacademy/permalink/325720245715540/",
      author: "Shajid Hasan Naeem",
      rank: "CTO, Co-Founder",
      image: "naeem",
      fbProfile: "https://www.facebook.com/shajidnaim",
    },
    {
      topic: "PHYSICS",
      head: "Entropy",
      body: "Murphy's Law নামে একটা law আছে।এতে বলা আছে, Things always tend to go wrong. মানে, সবকিছুই ভুল পথে যেতে চায়। এটা ফিজিক্সের ল না, দার্শনিক কথা এটা।কিন্তু, ফিজিক্সেও এর সত্যতা কম না।এন্ট্রপিও এমনই এক জিনিস।সোজা কথায়, এন্ট্রপি বাংলা হলো, বিশৃঙ্খলা।এন্ট্রপি বোঝাতে গিয়ে স্টিফেন হকিং তার ব্রিফ হিস্ট্রি অফ টাইম বইয়ে দারুণ একটা উদাহরণ দিয়েছেন।সেটা আমি তুলে ধরছি।",
      fbLink:
        "https://www.facebook.com/groups/aaloacademy/permalink/325773049043593",
      author: "রুবাইয়াত ফেরদৌস আলভী",
      rank: "Question Setter, Trainer",
      image: "alvee",
      fbProfile: "https://www.facebook.com/profile.php?id=100032305333803",
    },
    {
      topic: "MATHEMATICS",
      head: "অন্তরীকরণের যত কথা",
      body: 'শুরুতেই বলা যাক ডিফারেন্সিয়াল ক্যলকুলাসের কাজ কি! স্পষ্টভাবে বলতে গেলে এর কাজ ঢাল বের করা।বইপত্রে ঢালের যে ডেফিনিশন টা আছে সেটা মোটামোটি এই রকম "কোন ফাংশনের এর কোন একটি বিন্দুতে অঙ্কিত স্পর্শক x অক্ষের ধনাত্মক দিকের সাথে যে কোণ করে তার  Tangent অনুপাত ওই ফাংশনের ওই পয়েন্টের ঢাল!সত্যি কথা বলতে আমার কাছে মনে হয় এটা ঢালের এমন একটা ডেফিনিশন যার মাধ্যমে ঢাল সম্পর্কে কোন ধারণাই পাওয়া যায় না!ঢাল জিনিসটাকে তাই একটু অন্যভাবে নাড়িয়ে আসা যাক!',
      fbLink:
        "https://www.facebook.com/groups/aaloacademy/permalink/325030642451167",
      author: "Md Shahriar Kabir Nadim",
      rank: "Member",
      image: "nadim",
      fbProfile: "https://www.facebook.com/mdshahriarkabir.nadim.9",
    },
    {
      topic: "CHEMISTRY",
      head: "Organic Chemistry Notes",
      body: "ইন্টারমিডিয়েট লাইফে জৈব যৌগ নিয়ে অনেকেই সমস্যায় ভোগে। স্পেশালি নামধারী বিক্রিয়া আর গোছানোর অভাবে। আমি হাজারী স্যারের বইয়ের মোটামুটি সবগুলো বিক্রিয়াকে টপিক অনুযায়ী সাজিয়েছিলাম, আশা করছি তোমাদের কাজে লাগবে। ",
      fbLink:
        "https://www.facebook.com/groups/aaloacademy/permalink/324685579152340/",
      author: "Tanvirul Islam Sajin",
      rank: "CCO, Co-Founder",
      image: "sajin",
      fbProfile: "https://www.facebook.com/theSajin",
    },
    {
      topic: "AALO",
      head: "MIT Solve | Team Aalo",
      body: "২০১৯ সালে MIT Solve এর স্টার্টাপ প্রতিযোগিতা Tiger Challenge এ সর্বকনিষ্ঠ ফাইনালিস্ট দল হয় Team Aalo! তাই ইন্টারন্যাশনালি স্বীকৃত একটা প্রতিষ্ঠান থেকে আরো সুন্দর সুন্দর কন্টেন্ট পেতে তুমি নিজেও থাকো, তোমার বন্ধুদেরও সাজেস্ট করো। সামনে অপেক্ষা করছে আরো বড় চমক!",
      fbLink:
        "https://www.facebook.com/groups/aaloacademy/permalink/324535772500654",
      author: "Tanvirul Islam Sajin",
      rank: "CCO, Co-Founder",
      image: "sajin",
      fbProfile: "https://www.facebook.com/theSajin",
    },
  ],

  //
  //
  //
  //
  //
  // // // // // // // // // //......................  TEAMs  .................// // // // // // // // //
  //
  //
  //
  //
  //

  team: {
    coreMembers: [
      {
        name: "Ranat Das Prangon",
        image: "prangon",
        rank: "CEO, Co-Founder",
        fbProfile: "https://www.facebook.com/rdprangon",
        email: "ranatdasprangon@gmail.com",
        phone: "+8801715626571",
      },
      {
        name: "Shajid Hasan Naeem",
        image: "naeem",
        rank: "CTO, Co-Founder",
        fbProfile: "https://www.facebook.com/shajidnaim",
        email: "",
        phone: "+8801704996063",
      },
      {
        name: "Wasif Islam Saad",
        image: "wasif",
        rank: "CMO, Co-Founder",
        fbProfile: "facebook.com/wasifislamsaad",
        email: "Wisaad12@gmail.com",
        phone: "+8801791946148",
      },
      {
        name: "Tanvirul Islam Sajin",
        image: "sajin",
        rank: "CCO, Co-Founder",
        fbProfile: "https://www.facebook.com/theSajin",
        email: "",
        phone: "+8801772299443",
      },
      {
        name: "Nahid Hassan Shovo",
        image: "shovo",
        rank: "CIO, Co-Founder",
        fbProfile: "https://www.facebook.com/nahidhassan.shovo",
        email: "",
        phone: "+8801771912395",
      },
    ],
    questionSetters: [
      {
        name: "Tasfia Rahman Urbi",
        image: "urbi",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/tasfiarahman.urbi",
        email: "tasfiarahmanurbi@gmail.com",
        phone: "",
      },
      {
        name: "Arpita Roy Kumu",
        image: "kumu",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/arpitaroy.kumu",
        email: "arpitaroykumu@gmail.com",
        phone: "",
      },
      {
        name: "Shatabdi Sen Prapti",
        image: "prapti",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/shatabdi.senprapti.3",
        email: "shatabdisprapti@gmail.com",
        phone: "",
      },
      {
        name: "Waseem Mustak Zisan",
        image: "zisan",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/sureboyzisan.khan",
        email: "waseemmustakzisan@gmail.com",
        phone: "",
      },
      {
        name: "Sajid Hasan",
        image: "sajid",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/mahmudulhasan.shajid",
        email: "",
        phone: "",
      },
      {
        name: "Swapnil Kundu Argha",
        image: "swapnil",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/swapnil.kundu.90",
        email: "swapnilkundu01@gmail.com",
        phone: "",
      },
      {
        name: "MD Marziul Haque Riad",
        image: "riad",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/mdmarziul.riad",
        email: "riadsarker2002@gmail.com",
        phone: "",
      },
      {
        name: "Mehedi Hasan Akanda",
        image: "pial",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/profile.php?id=100057324591744",
        email: "pialakanda2002@gmail.com",
        phone: "",
      },
      {
        name: "Atikul Islam",
        image: "atik",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/profile.php?id=100052527283620",
        email: "atikammc21@gmail.com",
        phone: "",
      },
      {
        name: "Ferdous Alvi",
        image: "alvee",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/profile.php?id=100032305333803",
        email: "rubaiyatalvi177@gmail.com",
        phone: "",
      },
      {
        name: "Farzan Ahmed",
        image: "farzan",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/charls.augast",
        email: "ahmedfarzan959@gmail.com",
        phone: "",
      },
      {
        name: "Elmul Soad Swopno",
        image: "swopno",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/elmul.soad",
        email: "eswopno@gmail.com",
        phone: "",
      },
      {
        name: "Anjaman Arefin Somit",
        image: "somit",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/aa.somit",
        email: "aasomit237@gmail.com",
        phone: "",
      },
      {
        name: "Nafiul Ahmed Nazil",
        image: "nazil",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/profile.php?id=100045649954626",
        email: "nazilmzs165@gmail.com",
        phone: "",
      },
      {
        name: "Rittik Saha Sparsha",
        image: "rittik",
        rank: "Question Setter, Trainer",
        fbProfile: "https://www.facebook.com/rittiksahasparsha.saha",
        email: "rittiksahammc2021@gmail.com",
        phone: "",
      },
    ],
  },
};

const store = writable(data);

export default store;
