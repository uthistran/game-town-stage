
type GameListProps = {
    items: string[]
    title: string
}

const GameList: React.FC<GameListProps> = ({items, title}) => {
    return (
        <ul className="font-extrabold pl-[20px] mb-[10px]">
            {title}
            {items.map((item, index) => (
                <li key={index} className="list-none font-normal">{item}</li>
            ))}
        </ul>
    )
}

export default GameList;