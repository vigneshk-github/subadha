"use client"
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";

const TermsConditions = () => {
  return (
    <div className="bg-#101010">
    <div className="relative flex flex-col justify-center m-[140px] items-center">
      <h1 className="text-4xl font-bold mb-6">
        Website Terms and Conditions of Use
      </h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Terms</h2>
          <p>
            By accessing this Website, accessible from{" "}
            <a
              href="https://subadha.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              https://subadha.netlify.app/
            </a>
            , you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trademark law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on Subadha's Website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display;
            </li>
            <li>
              attempt to reverse engineer any software contained on Subadha's
              Website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transferring the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ul>
          <p>
            This will let Subadha to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is printed or electronic format. These Terms
            of Service has been created with the help of the Terms Of Service
            Generator.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
          <p>
            All the materials on Subadha's Website are provided "as is". Subadha
            makes no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Subadha does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Limitations</h2>
          <p>
            Subadha or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on Subadha's Website, even if Subadha or an authorize
            representative of this Website has been notified, orally or written,
            of the possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            5. Revisions and Errata
          </h2>
          <p>
            The materials appearing on Subadha's Website may include technical,
            typographical, or photographic errors. Subadha will not promise that
            any of the materials in this Website are accurate, complete, or
            current. Subadha may change the materials contained on its Website
            at any time without notice. Subadha does not make any commitment to
            update the materials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Links</h2>
          <p>
            Subadha has not reviewed all of the sites linked to its Website and
            is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement by Subadha of the
            site. The use of any linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Site Terms of Use Modifications
          </h2>
          <p>
            Subadha may revise these Terms of Use for its Website at any time
            without prior notice. By using this Website, you are agreeing to be
            bound by the current version of these Terms and Conditions of Use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Your Privacy</h2>
          <p>Please read our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            Any claim related to Subadha's Website shall be governed by the laws
            of without regards to its conflict of law provisions.
          </p>
        </section>
      </div>
      
    </div>
    </div>
  );
};

export default TermsConditions;
