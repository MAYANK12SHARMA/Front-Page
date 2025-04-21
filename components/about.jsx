import React from "react";
import { User, Code2, School } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">
        About the Developers
      </h1>

      <div className="space-y-12">
        {/* Developer 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 border p-6 rounded-2xl shadow-sm bg-muted/20">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Arjun Dev"
            className="w-28 h-28 rounded-full border object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">Arjun Dev</h2>
            <p className="text-muted-foreground">
              <User className="inline mr-2 w-4 h-4" />
              Role: Full Stack Developer
            </p>
            <p className="text-muted-foreground">
              <Code2 className="inline mr-2 w-4 h-4" />
              Tech: Next.js, Prisma, Clerk, TailwindCSS
            </p>
            <p className="text-muted-foreground">
              <School className="inline mr-2 w-4 h-4" />
              B.Tech CSE – ABC Institute of Technology
            </p>
            <p className="mt-4">
              Arjun is passionate about crafting full-stack solutions with
              intuitive UX. In this project, he focused on authentication,
              backend integrations, and building dynamic UIs.
            </p>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 border p-6 rounded-2xl shadow-sm bg-muted/20">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Riya Sharma"
            className="w-28 h-28 rounded-full border object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary">Riya Sharma</h2>
            <p className="text-muted-foreground">
              <User className="inline mr-2 w-4 h-4" />
              Role: Data Scientist & Frontend Engineer
            </p>
            <p className="text-muted-foreground">
              <Code2 className="inline mr-2 w-4 h-4" />
              Tech: Pygwalker, Recharts, Zod, HTML2PDF, React Hook Form
            </p>
            <p className="text-muted-foreground">
              <School className="inline mr-2 w-4 h-4" />
              B.Tech AI & DS – XYZ University
            </p>
            <p className="mt-4">
              Riya specialized in data visualization and model evaluation tools.
              She designed the dashboard, reporting, and PlotWizard features
              using interactive visual components.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground">
          This project is part of their academic journey and showcases their
          ability to merge design, data, and development into a powerful,
          no-code ML solution.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
