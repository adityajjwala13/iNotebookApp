// // import React from "react";

// function Alert(props) {
//   const capitalize = (word) => {
//     if (word === "danger") word = "error";
//     const lower = word.toLowerCase();
//     return lower[0].toUpperCase() + lower.slice(1);
//   };
//   return (
//     <div style={{ height: "50px" }}>
//       {props.alert && (
//         <div>
//           <div
//             className={`alert alert-${props.alert.type} alert-dismissible fade show`}
//             role="alert"
//           >
//             <strong>{capitalize(props.alert.type)}</strong>: {props.alert.mssg}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Alert;

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return "";
    if (word === "danger") word = "error";
    const lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} fade show`}
          role="alert"
          style={{
            position: "fixed",
            top: "65px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1050,
            width: "90%",
            maxWidth: "500px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            border: "none",
            borderRadius: "8px",
            padding: "14px 20px",
            fontSize: "15px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              props.alert.type === "success"
                ? "#d1e7dd"
                : props.alert.type === "error"
                ? "#f8d7da"
                : "#fff3cd",
            color:
              props.alert.type === "success"
                ? "#0f5132"
                : props.alert.type === "error"
                ? "#842029"
                : "#664d03",
          }}
        >
          <strong style={{ marginRight: "8px" }}>
            {capitalize(props.alert.type)}:
          </strong>
          {props.alert.mssg}
        </div>
      )}
    </div>
  );
}

export default Alert;
