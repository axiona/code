import Code from "../code";
import Assign from "./assign";

/**
 * assign {@link Code} to {@param error}, only assign {@link Code.code} value
 *
 * @param error
 * @param code
 */
export default function AssignObject<
    CodeTemplate,
    ErrorTemplate extends Error,
>(
    error : ErrorTemplate,
    code : Code<CodeTemplate>
) : ErrorTemplate & Code<CodeTemplate> {

    return Assign(error, code.code)
}
