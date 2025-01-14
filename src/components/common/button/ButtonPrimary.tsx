type Props = {
  label: string,
  onClick?: () => void
}

export const ButtonPrimary = ({ label, onClick }: Props) => {
  return (
    <button 
      onClick={onClick}
    >
      {label}
    </button>
  )
}

