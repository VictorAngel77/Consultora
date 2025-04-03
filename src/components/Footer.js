<file-changes>
```diff
--- a/src/components/Footer.js
+++ b/src/components/Footer.js
@@ -3,10 +3,23 @@
 const Footer = () => {
   return (
     <footer>
-      <div className="container">
         <div className="row">
           <div className="col-md-4">
-            <img src={bienestarLogo} alt="Bienestar Consultora Logo" style={{ height: '50px', verticalAlign: 'middle', marginRight: '5px' }} />
+             <div className="container">
+                <div className="row">
+                    <div className="col-md-12">
+                        <img src={bienestarLogo} alt="Bienestar Consultora Logo" style={{ height: '50px', verticalAlign: 'middle', marginRight: '5px' }} />
+                    </div>
+                </div>
+             </div>
+          </div>
+          <div className="col-md-4">
+              <div className="container">
+                <div className="row">
+                    <div className="col-md-12">
+                        <h5>Secciones</h5>
+                        <ul className="list-unstyled">
+                            <li><a href="/#intro" className="nav-link-footer">Inicio</a></li>
             <p>Bienestar Consultora</p>
           </div>
           <div className="col-md-4">
@@ -14,6 +27,14 @@
             <p>Teléfono: +54 9 264 5883771</p>
             <p>Email: info@bienestarconsultora.com</p>
             <p>Dirección: Laprida 70 oeste, J5400 San Juan</p>
+                            <li><a href="/#nosotros" className="nav-link-footer">Nosotros</a></li>
+                            <li><a href="/#por-que-elegirnos" className="nav-link-footer">¿Por qué elegirnos?</a></li>
+                            <li><a href="/#servicios" className="nav-link-footer">Servicios</a></li>
+                            <li><a href="/#iffies" className="nav-link-footer">Clientes</a></li>
+                            <li><a href="/#contacto" className="nav-link-footer">Contacto</a></li>
+                        </ul>
+                    </div>
+                </div>
           </div>
           <div className="col-md-4">
             <div className="social-icons">
@@ -24,7 +45,6 @@
             </div>
           </div>
         </div>
-        <p>&copy; {new Date().getFullYear()} Bienestar Consultora. Todos los derechos reservados.</p>
       </div>
     </footer>
   );

