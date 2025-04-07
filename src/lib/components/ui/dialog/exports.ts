import { Dialog as DialogPrimitive } from 'bits-ui';
import Content from './components/dialog-content.svelte';
import Description from './components/dialog-description.svelte';
import Footer from './components/dialog-footer.svelte';
import Header from './components/dialog-header.svelte';
import Overlay from './components/dialog-overlay.svelte';
import Title from './components/dialog-title.svelte';

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;
const Portal = DialogPrimitive.Portal;

export { Close, Content, Description, Footer, Header, Overlay, Portal, Root, Title, Trigger };
