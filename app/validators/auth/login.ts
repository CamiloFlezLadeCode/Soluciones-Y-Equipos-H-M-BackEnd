import vine from '@vinejs/vine'

export const loginValidator = vine.create({
    credenClave: vine.string(),
    credenDocumentoUsuario: vine.string()
})