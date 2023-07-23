import Link from "next/link";

// TODO: add mailchimp for email listing in the future.

// import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// const CustomForm = ({
//   status,
//   message,
//   onValidated,
// }: {
//   status: "error" | "success" | "sending" | null;
//   message: string | Error | null;
//   onValidated: (data: EmailFormFields) => void;
// }) => {
//   let email: HTMLInputElement | null;
//   const submit = () =>
//     email &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email.value,
//     });

//   return (
//     <div
//       style={{
//         background: "#efefef",
//         borderRadius: 2,
//         padding: 10,
//         display: "inline-block",
//       }}
//     >
//       {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//       {status === "error" && message && (
//         <div
//           style={{ color: "red" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       {status === "success" && message && (
//         <div
//           style={{ color: "green" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       <input
//         style={{ fontSize: "2em", padding: 5 }}
//         ref={(node) => (email = node)}
//         type="email"
//         placeholder="Your email"
//       />
//       <br />
//       <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
//         Submit
//       </button>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <div className="inline-flex h-20 py-7 justify-center items-center bg-black gap-16 w-full">
      <div className="justify-start items-start gap-3.5 inline-flex">
        <div className="text-yellow-500 text-xl font-normal leading-normal">
          © 2023
        </div>
        <div className="justify-start items-start gap-3.5 flex flex-wrap">
          <Link
            href="https://twitter.com/moctarm988"
            className="text-yellow-500 text-xl font-normal leading-normal"
          >
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamadou-moctar-622baa160/"
            className="text-yellow-500 text-xl font-normal leading-normal"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:moctarm988@gmail.com"
            className="text-yellow-500 text-xl font-normal leading-normal"
          >
            Email
          </Link>
          <Link
            id="id-mail"
            href="https://github.com/mohamadoudou"
            className="text-yellow-500 text-xl font-normal leading-normal"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
    // {/* <div>
    //   <h1>Subscribe to our newsletter</h1>
    //   <MailchimpSubscribe
    //     url={url}
    //     render={({ subscribe, status, message }) => (
    //       <CustomForm
    //         status={status}
    //         message={message}
    //         onValidated={(formData: EmailFormFields) => subscribe(formData)}
    //       />
    //     )}
    //   />
    // </div> */}
  );
};

export default Footer;
