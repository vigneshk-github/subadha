// import React from "react";
// import { motion } from "framer-motion";
// import Footer from "@/components/Footer/Footer";

// const TermsConditions = () => {
//   return (
//     <div className="bg-black">
//       <div className="relative flex flex-col justify-center mx-auto max-w-3xl p-8 space-y-4">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold mb-6"
//         >
//           Website Terms and Conditions of Use
//         </motion.h1>
//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             1. Terms
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             By accessing this Website, accessible from{" "}
//             <a
//               href="https://subadha.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400"
//             >
//               https://subadha.netlify.app/
//             </a>
//             , you are agreeing to be bound by these Website Terms and Conditions
//             of Use and agree that you are responsible for the agreement with any
//             applicable local laws. If you disagree with any of these terms, you
//             are prohibited from accessing this site. The materials contained in
//             this Website are protected by copyright and trademark law.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             2. Use License
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Permission is granted to temporarily download one copy of the
//             materials on Subadha's Website for personal, non-commercial
//             transitory viewing only. This is the grant of a license, not a
//             transfer of title, and under this license you may not:
//           </motion.p>
//           <motion.ul
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="list-disc list-inside ml-4"
//           >
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               modify or copy the materials;
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               use the materials for any commercial purpose or for any public
//               display;
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               attempt to reverse engineer any software contained on Subadha's
//               Website;
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               remove any copyright or other proprietary notations from the
//               materials; or
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               transferring the materials to another person or "mirror" the
//               materials on any other server.
//             </motion.li>
//           </motion.ul>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             This will let Subadha to terminate upon violations of any of these
//             restrictions. Upon termination, your viewing right will also be
//             terminated and you should destroy any downloaded materials in your
//             possession whether it is printed or electronic format. These Terms
//             of Service has been created with the help of the Terms Of Service
//             Generator.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             3. Disclaimer
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             All the materials on Subadha's Website are provided "as is". Subadha
//             makes no warranties, may it be expressed or implied, therefore
//             negates all other warranties. Furthermore, Subadha does not make any
//             representations concerning the accuracy or reliability of the use of
//             the materials on its Website or otherwise relating to such materials
//             or any sites linked to this Website.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             4. Limitations
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Subadha or its suppliers will not be hold accountable for any
//             damages that will arise with the use or inability to use the
//             materials on Subadha's Website, even if Subadha or an authorize
//             representative of this Website has been notified, orally or written,
//             of the possibility of such damage. Some jurisdiction does not allow
//             limitations on implied warranties or limitations of liability for
//             incidental damages, these limitations may not apply to you.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             5. Revisions and Errata
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             The materials appearing on Subadha's Website may include technical,
//             typographical, or photographic errors. Subadha will not promise that
//             any of the materials in this Website are accurate, complete, or
//             current. Subadha may change the materials contained on its Website
//             at any time without notice. Subadha does not make any commitment to
//             update the materials.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             6. Links
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Subadha has not reviewed all of the sites linked to its Website and
//             is not responsible for the contents of any such linked site. The
//             presence of any link does not imply endorsement by Subadha of the
//             site. The use of any linked website is at the user's own risk.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             7. Site Terms of Use Modifications
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Subadha may revise these Terms of Use for its Website at any time
//             without prior notice. By using this Website, you are agreeing to be
//             bound by the current version of these Terms and Conditions of Use.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             8. Your Privacy
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Please read our Privacy Policy.
//           </motion.p>
//         </section>

//         <section>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-semibold mb-2"
//           >
//             9. Governing Law
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Any claim related to Subadha's Website shall be governed by the laws
//             without regards to its conflict of law provisions.
//           </motion.p>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TermsConditions;
