import vine from '@vinejs/vine'
// import { dateFormats } from '#constants/dateFormats'

export const createUserValidator = vine.create({
    usuApellidos: vine.string(),
    usuCorreo: vine.string().email(),
    usuDocumento: vine.string(),
    // usuFechaCreacion: vine.date({
    //     formats: dateFormats
    // }),
    // usuFechaModificacion: vine.date({
    //     formats: dateFormats
    // }),
    // usuFechaCreacion: vine.date(),
    // usuFechaModificacion: vine.date(),
    usuNombres: vine.string(),
    usuTipoDocumentoId: vine.number(),
    usuUsuarioCrea: vine.string(),
    usuUsuarioModifica: vine.string(),
})

// export const createUserValidator = vine.create(
//     vine.object({
//         usuApellidos: vine.string(),
//         usuCorreo: vine.string().email(),
//         usuDocumento: vine.string(),
//         usuFechaCreacion: vine.date({
//             formats: dateFormats
//         }),
//         usuFechaModificacion: vine.date({
//             formats: dateFormats
//         }),
//         usuNombres: vine.string(),
//         usuTipoDocumentoId: vine.number(),
//         usuUsuarioCrea: vine.string(),
//         usuUsuarioModifica: vine.string(),
//     })
// )
