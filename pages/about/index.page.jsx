import { redirect } from "vike/abort"
import { usePageContext } from "../../renderer/usePageContext"

export const Page = () => {

    const { urlParsed: { search } } = usePageContext()

    if (search.redirect) {
        throw redirect("/")
    }

    return <div>about page</div>
}