import React from 'react';

const ArcadeScreen = (props) => {
    const styles = {
        screen: {
            background: `repeating-linear-gradient(
                to bottom,
                #0f0a1e,
                #0f0a1e 2px,
                #171226 2px,
                #171226 4px
              )`,
            color: 'white',
            width: '100%',
            textAlign: 'center',
            margin: 'auto',
            padding: '16px',
            // fontSize: '40px',
            // lineHeight: '20px',
            // letterSpacing: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        small: {
            fontSize: '15px',
            letterSpacing: '5px',
            textShadow: `-1px 0 0 #fdff2a,
              -2px 0 0 #df4a42,
              1px 0 0 #91fcfe,
              2px 0 0 #4405fc
              `,
        },

        medium: {
            fontSize: '18px',
            letterSpacing: '5px',
            textShadow: `-1px 0 0 #fdff2a,
              -2px 0 0 #df4a42,
              1px 0 0 #91fcfe,
              2px 0 0 #4405fc
              `,
        },
        big: {
            fontSize: '40px',
            letterSpacing: '5px',
            textShadow: `-2px 0 0 #fdff2a,
              -4px 0 0 #df4a42,
              2px 0 0 #91fcfe,
              4px 0 0 #4405fc
              `,
            animation: 'blink 1s steps(4, start) infinite',
        },
    };
    return (
        <div style={styles.screen}>
            <div>
                <p style={styles.small}>My name is</p>
                <p style={styles.big} className="arcadeScreen">
                    Uzair Ishaq
                </p>
                {/* <p style={styles.small}>-----</p> */}
                <p style={styles.medium}>
                    Software Developer, Programmer, Engineer...
                </p>
                <p style={styles.medium}>I like to build things :)</p>
            </div>
        </div>
    );
};

export default ArcadeScreen;
