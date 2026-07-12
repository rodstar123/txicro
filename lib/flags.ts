/**
 * Feature flags for surfaces that are built but must not ship yet.
 *
 * LEAD_MAGNET_ENABLED — the "Not Ready for an Assessment?" section offers a
 * McAllen Gateway Guide PDF that does not exist. The form also does not deliver
 * anything: it logs the email client-side and shows a "check your email"
 * confirmation. Flip to true only once the PDF exists AND the form is wired to a
 * real delivery/ESP endpoint. Until then it is a false promise and a lead sink.
 */
export const LEAD_MAGNET_ENABLED: boolean = false;
