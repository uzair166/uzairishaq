import React from 'react'
import '../dist/skillBar.css'

const SkillBar = (props) => {
    return (
        <div class="perspective" style={props.style || {}}>
            <div
                class="bar cyan"
                role="progressbar"
                aria-valuenow={props.value || 65}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div class="bar-face roof percentage">
                    <span
                        className="pl-3"
                        style={{
                            fontSize: 'initial',
                            position: 'absolute',
                            textAlign: 'left',
                            left: 0,
                            // paddingLeft: '8px',
                        }}
                    >
                        {props.text || ''}
                    </span>
                </div>
                <div class="bar-face back percentage"></div>
                <div class="bar-face floor percentage"></div>
                {/* <div class="bar-face left"></div> */}
                {/* <div class="bar-face right"></div> */}
                <div class="bar-face front percentage">
                    <span
                        className="pl-3"
                        style={{
                            fontSize: 'initial',
                            position: 'absolute',
                            textAlign: 'left',
                            left: 0,
                            paddingLeft: '8px',
                        }}
                    >
                        {props.text || ''}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SkillBar
