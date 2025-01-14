import { CSSProperties } from "react"

type Props = {
    text: string
}

const styles: { code: CSSProperties } = {
    code: {
        background: 'dimgray',
        display: 'flex',
        textAlign: 'left',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
    }
}

export const BoardCode = ({ text }: Props) => {
  return (
    <div>
        <pre>
            <code style={styles.code} >
            {text}
            </code>
        </pre>
    </div>
  )
}