import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-2xl font-semibold mb-3">Information Collection and Use</h2>
      <p className="mb-4">
        The <strong>YCRYPT Vault app</strong> collects and stores only password data within the application in an encrypted format. No other data is collected or stored. The App operates in an offline-only mode and does not have any internet access. All data, including passwords, remains solely within the user&apos;s device and is never transmitted or shared externally.
      </p>
      <p className="mb-4">
        The App exclusively utilizes local storage on the user&apos;s device, ensuring that sensitive information, such as passwords and other data, is securely contained within the application. The encryption mechanisms employed by the App are designed to safeguard user data from unauthorized access.
      </p>
      <p className="mb-4">
        Users can be assured that their information remains within the confines of their devices, and no data is transferred to external servers or third-party entities. The App prioritizes user privacy and employs robust security measures to uphold the confidentiality and integrity of the stored data.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Log Data</h2>
      <p className="mb-4">
        The Vault app does not log any type of data. The application operates with a strict policy of not generating or maintaining logs containing user information.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
      <p className="mb-4">The App does not use cookies. It neither employs nor stores any information through cookies.</p>

      <h2 className="text-2xl font-semibold mb-3">Service Providers</h2>
      <p className="mb-4">
        We do not engage third-party companies or individuals to facilitate our service. The App functions independently without relying on external service providers.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Security</h2>
      <p className="mb-4">
        The App ensures that all data, including passwords, is encrypted and stored solely within the device. No data is transmitted over the Internet, as the App operates entirely offline. It is important to emphasize that, since the App is freely available for download, no user data is shared online, and the App&apos;s functionality revolves around securely managing information within the user&apos;s device.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be communicated to users by posting the updated Privacy Policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:{" "}
        <a href="mailto:apps.afrozshaikh@gmail.com" className="text-blue-600 underline">
          apps.afrozshaikh@gmail.com
        </a>
        .
      </p>

      <p className="mt-8">
        By using the Service, you agree to the collection and use of information in accordance with this policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
