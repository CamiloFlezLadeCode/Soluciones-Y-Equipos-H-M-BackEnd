/*
|--------------------------------------------------------------------------
| Validator file
|--------------------------------------------------------------------------
|
| The validator file is used for configuring global transforms for VineJS.
| The transform below converts all VineJS date outputs from JavaScript
| Date objects to Luxon DateTime instances, so that validated dates are
| ready to use with Lucid models and other parts of the app that expect
| Luxon DateTime.
|
*/

import { DateTime } from 'luxon'
import vine, { VineDate, SimpleMessagesProvider } from '@vinejs/vine'

declare module '@vinejs/vine/types' {
  interface VineGlobalTransforms {
    date: DateTime
  }
}

VineDate.transform((value) => DateTime.fromJSDate(value))


vine.messagesProvider = new SimpleMessagesProvider({
  // Obligatoriedad
  required: 'El campo {{ field }} es obligatorio',

  // Tipo de dato
  string: 'El campo {{ field }} debe ser un string',
  number: 'El campo {{ field }} debe ser un entero',
  date: 'El campo {{ field }} debe ser una fecha',
  dateFormat: 'El campo {{ field }} debe tener el formato {{ format }}',
  email: 'El campo {{ field }} debe ser un correo electrónico válido',
  datetime: 'El campo {{ field }} debe ser una fecha y hora',

  // Longitudes
  min: 'La valor mínimo permitido para {{ field }} es {{ min }}',
  max: 'La valor máximo permitido para {{ field }} es {{ max }}',
  minLength: 'La cantidad mínima de caracteres permitidos para {{ field }} es {{ min }}',
  maxLength: 'La cantidad máxima de caracteres permitidos para {{ field }} es {{ max }}',

  // Condiciones
  unique: 'El valor {{ field }} ya ha sido registrado',
})
