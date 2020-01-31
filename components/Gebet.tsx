import { MiscButton } from "./Misc";

export const GebetsanliegenOverview = () => (
  	<section id="GebetsanliegenOverview" className="sidebar sidebar-card">

        <img src="images/luwero-veranstaltungen.jpg" alt="Übersicht über regelmäßige Veranstaltungen der Kirche in Luwero" />

        <div className="sidebar-content">

        <h3>Gebetsanliegen</h3>

		<p>Wir freuen uns, wenn Sie die Veranstaltungen auf der Missionsstation im Gebet begleiten und unterstützen.</p>
		<p>Aktuelle Informationen und aktuelle Anliegen finden Sie unter "Nachrichten."</p>

		<MiscButton link="/news" cssclass="button button-primary" text="Nachrichten" />
        
        </div>
		
	</section>
)