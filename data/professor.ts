export type Professor = {
  name: string;
  nameKo: string;
  degree: string;
  role: string;
  department: string;
  institution: string;
  email: string;
  phone: string;
  researchExperience: { period: string; description: string }[];
  education: { period: string; description: string }[];
  awards: { year: string; description: string }[];
};

export const professor: Professor = {
  name: "Ki Min Nam",
  nameKo: "남 기 민",
  degree: "Ph.D.",
  role: "Professor",
  department: "Department of Chemistry",
  institution: "Pusan National University",
  email: "kimin.nam@pusan.ac.kr",
  phone: "+82-51-510-7416",
  researchExperience: [
    { period: "2024–Present", description: "Full Professor, Department of Chemistry, Pusan National University" },
    { period: "2014–2019", description: "Assistant / Associate Professor, Department of Chemistry, Mokpo National University" },
    { period: "Postdoctoral", description: "The University of Texas at Austin · Advisor: Prof. Allen J. Bard" },
  ],
  education: [
    { period: "2006–2011", description: "M.S. & Ph.D., KAIST · Advisor: Prof. Joon Taik Park" },
    { period: "1999–2006", description: "B.S., Kyungpook National University" },
  ],
  awards: [
    { year: "2025", description: "Outstanding Research Award, PNU Best Biz Partners Ceremony" },
    { year: "2025", description: "Supervisor of award-winning students (Kim et al.), Humantech Paper Award — Encouragement Prize, Energy & Environment" },
    { year: "2022", description: "i-SENS Young Electrochemical Scientist Award, Korean Chemical Society" },
    { year: "2019", description: "Outstanding Research Award, Mokpo National University" },
    { year: "2016", description: "Outstanding Research Team of Undergraduate Research Program, KFASC" },
  ],
};
