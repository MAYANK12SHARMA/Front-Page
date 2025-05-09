import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "Machine Learning Studio",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
    link: "https://main-nextgen.streamlit.app/",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Deep Learning Studio",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
    link: "http://localhost:8501/",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Data Visualization Studio",
    description:
      "Generate, customize, and code any data visualization with AI-powered precision.",
    link: "https://data-visualization-studio.streamlit.app/",
  },
];
