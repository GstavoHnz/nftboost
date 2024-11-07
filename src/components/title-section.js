export function TitleSection({ title, subtitle }) {
    return (
        <div className="mb-14 space-y-1">
            <span className="text-xl font-semibold text-white opacity-70">{ title }</span>
            <h2 className="font-poppins text-5xl/tight">{ subtitle }</h2>
        </div>
    )
}