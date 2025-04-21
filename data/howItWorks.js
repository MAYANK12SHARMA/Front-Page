import { CloudUpload, BarChart, FileText, Cpu, Layers } from "lucide-react";

export const howItWorks = [
  {
    title: "Seamless Data Upload",
    description:
      "Easily upload datasets in CSV, XLSX formats for quick insights.",
    icon: <CloudUpload className="w-8 h-8 text-primary" />,
  },
  {
    title: "Data Visualization",
    description: "Generate interactive plots with a few clicks.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Automated Reporting",
    description: "Generate detailed reports  automatically.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Machine Learning Model Training",
    description:
      "Train ML models efficiently with automated splitting, and evaluation features.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
  },
  {
    title: "Deep Learning Model Integration",
    description: "Build and train deep learning models",
    icon: <Layers className="w-8 h-8 text-primary" />,
  },
];
