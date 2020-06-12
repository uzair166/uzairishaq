import React from 'react'

const ArcadeScreen  = props => {

    const styles = {
        screen: {
            // fontFamily: "Press Start 2P",
            // background: `repeating-linear-gradient(
            //   to bottom,
            //   #0f0a1e,
            //   #0f0a1e 2px,
            //   lighten(#0f0a1e, 3%) 2px,
            //   lighten(#0f0a1e, 3%) 4px
            // )`,

            background: `repeating-linear-gradient(
                to bottom,
                #0f0a1e,
                #0f0a1e 2px,
                #171226 2px,
                #171226 4px
              )`,
            

            // position: 'absolute',
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right: 0,
            // height: '90px',
            color: 'white',
            width: '100%',
            // height: '300px',
            textAlign: 'center',
            margin: 'auto',
            padding: '16px',
            // fontSize: '40px',
            // lineHeight: '20px',
            // letterSpacing: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // animation: 'blink 1s steps(4, start) infinite'
        },

        small: {
            fontSize: '15px', 
            letterSpacing:'5px',
            textShadow: `-1px 0 0 #fdff2a,
              -2px 0 0 #df4a42,
              1px 0 0 #91fcfe,
              2px 0 0 #4405fc
              `,
        },

        medium: {
            fontSize: '18px', 
            letterSpacing:'5px',
            textShadow: `-1px 0 0 #fdff2a,
              -2px 0 0 #df4a42,
              1px 0 0 #91fcfe,
              2px 0 0 #4405fc
              `,
        },
        big: {
            fontSize: '40px', 
            letterSpacing:'5px',
            textShadow: `-2px 0 0 #fdff2a,
              -4px 0 0 #df4a42,
              2px 0 0 #91fcfe,
              4px 0 0 #4405fc
              `,
              animation: 'blink 1s steps(4, start) infinite'
        }
    }
    return (
        <div style={styles.screen} >
            <div>
            <p style={styles.small}>My name is</p>
            <p style={styles.big} className="arcadeScreen">Uzair Ishaq</p>
            {/* <p style={styles.small}>-----</p> */}
            <p style={styles.medium}>I am a software developer, programmer, engineer...</p>
            <p style={styles.medium}>I like to build things :)</p>
            </div>
        </div>
    )
    // return (
    //     <div>
    //         <div style={styles.screen} >
    //             Welcome
    //         </div>
    //         <div id="monitor">
    //             <div id="bezel">
    //             <div style={{...styles.screen, height:'100%'}} >
    //             Welcome
    //         </div>
    //             </div>
    //         </div>
    //     </div>

    // )
}

export default ArcadeScreen