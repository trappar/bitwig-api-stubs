NoteInput.NoteExpression = {
  GAIN_DOWN:1,
  GAIN_UP:2,
  NONE:3,
  PAN_LEFT:4,
  PAN_RIGHT:5,
  PITCH_DOWN:6,
  PITCH_UP:7,
  TIMBRE_DOWN:8,
  TIMBRE_UP:9
};

/**
 * Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)
 * @param {string} name - the name of the enum constant to be returned.
 * @returns the enum constant with the specified name
 * @throws IllegalArgumentException - if this enum type has no constant with the specified name
 * @throws NullPointerException - if the argument is null
 */
NoteInput.NoteExpression.valueOf = function(name) {};

/**
 * Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:
 * for (NoteInput.NoteExpression c : NoteInput.NoteExpression.values())
 *     System.out.println(c);
 * @returns an array containing the constants of this enum type, in the order they are declared
 */
NoteInput.NoteExpression.values = function() {};
