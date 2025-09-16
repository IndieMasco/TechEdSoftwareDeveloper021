// Props parameter represents the props we added in the component instance (in this case, in app.jsx)

export default function MainSection(props) {
  return (
    <section>
      <img src={props.source} alt="props.altText" />
      <p>{props.content}</p>
      <button>
        <a href={props.link}>CLICK ME!</a>
      </button>
    </section>
  );
}

// YOU COULD ALSO DO IT THIS WAY

// props {
//   source: "",
//   altText: "",
//   content: "",
//   link: "",
// }

// export default function MainSection({source, altText, content, link}) {
//   return (
//     <section>
//       <img src={source} alt={altText} />
//       <p>{content}</p>
//       <button>
//         <a href={link}>CLICK ME!</a>
//       </button>
//     </section>
//   );
// }
