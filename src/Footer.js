// src/Footer.js
import "./Footer.css";

import React from "react";

function Footer() {
	return (
		<div class="container-fluid footer pt-5">
			
			<div class="row">
				<div class="col-md-12 text-center py-4">
					<a href="https://github.com/SporeFinance/Spore-frontend" target="_blank" class="credit" rel="noopener noreferrer">
						{" "}
						Made with &hearts; by the Spore community
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
