"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-8 max-w-3xl mx-auto relative flex flex-col justify-center m-[140px] items-center"
    >
      <h1 className="text-4xl font-bold mb-6">Privacy Policy for Subadha</h1>
      <p>
        At Subadha, accessible from{" "}
        <a
          href="https://subadha.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          https://subadha.netlify.app/
        </a>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that is collected
        and recorded by Subadha and how we use it.
      </p>

      <h2 className="text-2xl font-semibold my-4">Log Files</h2>
      <p>
        Subadha follows a standard procedure of using log files. These files log
        visitors when they visit websites. All hosting companies do this and a
        part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </p>

      <h2 className="text-2xl font-semibold my-4">Cookies and Web Beacons</h2>
      <p>
        Like any other website, Subadha uses "cookies". These cookies are used
        to store information including visitors' preferences, and the pages on
        the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information.
      </p>

      <h2 className="text-2xl font-semibold my-4">
        Google DoubleClick DART Cookie
      </h2>
      <p>
        Google is one of a third-party vendor on our site. It also uses cookies,
        known as DART cookies, to serve ads to our site visitors based upon
        their visit to www.website.com and other sites on the internet. However,
        visitors may choose to decline the use of DART cookies by visiting the
        Google ad and content network Privacy Policy at the following URL –{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          https://policies.google.com/technologies/ads
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold my-4">
        Third Party Privacy Policies
      </h2>
      <p>
        Subadha's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </p>

      <h2 className="text-2xl font-semibold my-4">Children's Information</h2>
      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p>
        Subadha does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately and we will do our best efforts to promptly
        remove such information from our records.
      </p>

      <h2 className="text-2xl font-semibold my-4">
        Online Privacy Policy Only
      </h2>
      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in Subadha. This policy is not applicable to any
        information collected offline or via channels other than this website.
      </p>

      <h2 className="text-2xl font-semibold my-4">Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
