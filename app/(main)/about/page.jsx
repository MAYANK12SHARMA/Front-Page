import React from "react";
import { User, Code2, School } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">
        Meet the Developers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {/* Developer 1 */}
        <div className="group relative border rounded-3xl p-6 bg-muted/20 hover:bg-primary hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 rounded-3xl group-hover:opacity-60 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center relative z-10">
            <img
              src="/Mayank.png"
              alt="Mayank Sharma"
              className="w-28 h-28 rounded-full border object-cover mb-4 transition-all duration-300 ease-in-out group-hover:scale-105"
            />
            <h2 className="text-2xl font-semibold text-primary group-hover:text-black transition-all duration-300 ease-in-out">
              Mayank Sharma
            </h2>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <User className="inline mr-2 w-4 h-4" />
              Full Stack Developer
            </p>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <Code2 className="inline mr-2 w-4 h-4" />
              Tech: Python, Nextjs, ML, DL
            </p>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <School className="inline mr-2 w-4 h-4" />
              B.Tech (Hons.) CSE GLA UNIVERSITY, MATHURA
            </p>
            <p className="mt-4 text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              Mayank combines his expertise in full-stack development with
              machine learning to create seamless, intelligent platforms.
            </p>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="group relative border rounded-3xl p-6 bg-muted/20 hover:bg-primary hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-600 opacity-40 rounded-3xl group-hover:opacity-60 transition-all duration-500 ease-in-out"></div>
          <div className="flex flex-col items-center relative z-10">
            <img
              src="/garvit.jpg"
              alt="Garvit Kedia"
              className="w-28 h-28 rounded-full border object-cover mb-4 transition-all duration-300 ease-in-out group-hover:scale-105"
            />
            <h2 className="text-2xl font-semibold text-primary group-hover:text-black transition-all duration-300 ease-in-out">
              Garvit Kedia
            </h2>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <User className="inline mr-2 w-4 h-4" />
              Data Scientist & Frontend Engineer
            </p>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <Code2 className="inline mr-2 w-4 h-4" />
              Tech: Machine Learning, Deep Learning, Python, Pandas, Sk-learn
            </p>
            <p className="text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              <School className="inline mr-2 w-4 h-4" />
              B.Tech (Hons.) CSE GLA UNIVERSITY, MATHURA
            </p>
            <p className="mt-4 text-muted-foreground group-hover:text-black transition-all duration-300 ease-in-out">
              Garvit is an expert in data preprocessing, feature extraction, and
              model evaluation. He played a key role in designing the ML
              pipelines.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground">
          The project is a collaboration between passionate developers Garvit &
          Mayank, who combined their skills to create an innovative and seamless
          platform that empowers users with AI and ML capabilities.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
