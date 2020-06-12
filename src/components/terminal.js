import React from 'react'

const Terminal = props => {

    const styles = {
        wrapper: {
            height: '50%',
            minHeight: '300px',
            boxShadow: '0px 0px 20px rgba(0,0,0,0.75)',
            borderRadius: '5px'
        },
        head: {
            fontfamily: "'monospace'",
            color: "'#fff'",
            margin: "auto",
            padding: "35px",
            fontSize: "40px",
            textAlign: "center",
        },
        bar: {
            verticalAlign: "middle",
            // textAlign: "center",
            width: "100%",
            height: "23px",
            backgroundColor: "#DAD9D9",
            margin: "0 auto",
            fontFamily: "monospace",
            paddingTop: "5px",
            float: "none",
            borderRadius: "5px 5px 0 0",
        },
        red: {
            display: 'inline-block',
            backgroundColor: "#E94B35",
            borderRadius: "100%",
            width: "13px",
            height: "13px",
            margin: "0 4px",
            marginLeft: "6px"
        },
        yellow: {
            display: 'inline-block',
            backgroundColor: "#f0f000",
            borderRadius: "100%",
            width: "13px",
            height: "13px",
            margin: "0 4px"
        },
        green: {
            backgroundColor: "#1AAF5C",
            borderRadius: "100%",
            width: "13px",
            height: "13px",
            display: "inline-block",
            margin: "0 4px"
        },
        screen: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: "100%",
            height: "calc(100% - 23px)",
            borderRadius: "0 0 5px 5px",
            margin: "0 auto",
            padding: "8px",
            textOverflow: 'clip',
            // textWrap: 'none',
            // textOverflow: 'ellipsis',
            overflow: 'hidden',

            // wordWrap: 'break-word'
        },
        font: {
            color: "#fff",
            fontFamily: "monospace",
            fontSize: "15px",
            textAlign: "left",
            // position: "static",
            textOverflow: 'clip'
        }
    }
    return(
        <div style={styles.wrapper}>
            <div style={styles.bar}>
                <div style={styles.red}></div>
                <div style={styles.yellow}></div>
                <div style={styles.green}></div>
            </div>
            <div style={styles.screen}>
                <pre style={styles.font}>root@10.0.0.1:~$lkjshflkjlksdjflsjklfjsdklklsjdkfljdslkjflkdsjfkldjsdljfkjhskdhfkj<br />
                sjdhfkshdfkhsd
                lskjdfkjslkjflsdjhfkjdhfgkljhdfskghdkshgfkldfhgkjsdhfgljkhsdkljfghskdlfjhgsjk</pre>
            </div>
        </div>
    )
}

export default Terminal