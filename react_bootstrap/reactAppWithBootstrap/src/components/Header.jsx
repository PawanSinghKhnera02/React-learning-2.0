import "../App.css"

function Header({headerInfo,cname,children}){ //prop is destructured here
    // let {headerInfo,cname}=p;   // destructuring the props , also we can destructure it inside argument bracket
    console.log(headerInfo, cname);
    return(
        <>
        {children}
        {/* <div className="header">Header Section {p.props}</div> */}
        <div className="header">Header Section {headerInfo.email} {cname}</div>
        </>
    )
}

export default Header