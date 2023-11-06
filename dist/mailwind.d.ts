interface MailwindOptions {
    /** A path to your tailwind.css file, optimized for email */
    tailwindConfigPath?: string;
    /** The base px value for 1rem, defaults to 16px */
    basePx?: number;
    /** Set to `false` to disable extended resets */
    reset?: boolean;
    /** Custom CSS to be injected */
    css?: string;
}
declare const mailwindCss: (inputHtml: string, options: MailwindOptions) => Promise<{
    html: string;
    css: string;
} | undefined>;
export { MailwindOptions, mailwindCss };
