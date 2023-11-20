import { redirect } from "vike/abort"
import { usePageContext } from "../../renderer/usePageContext"

export const Page = () => {

    const { urlParsed: { search } } = usePageContext()

    if (search.redirect) {
        throw redirect("/about")
    }

    return <div>index page</div>
}