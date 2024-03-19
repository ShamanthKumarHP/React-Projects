export default function TabButton ({children, onSelect, isSelected, ...props}) {
    return (
    <li>
        <button className={isSelected ? "active": undefined} {...props}>{children}
        </button></li>
    )
}

// export default function TabButton ({children}) {
//     return (<li><button>{children}</button></li>)
// }

// export default function TabButton ({label}) {
//     return (<li><button>{label}</button></li>)
// }