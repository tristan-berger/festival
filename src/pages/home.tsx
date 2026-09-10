import { useScroll, useTransform } from 'framer-motion';
import videoBg from '../assets/Video-1.mp4';







function PageHome() {

  


  return (

    
    <div id='page_home' className="page">
      
      <video autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéo.
      </video>
      
      <h1 id='page_home_title'>Titre Festival</h1>


      <section>
        <h2>Présentation du féstival</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, ligula vitae scelerisque faucibus, diam lectus malesuada erat, eu suscipit est nisi fringilla nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ultricies leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ligula arcu, accumsan et nibh quis, iaculis viverra lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum placerat metus quis auctor tristique. Aliquam sit amet dolor dapibus, tempus mauris a, lacinia ante. Duis id ipsum sed eros ullamcorper pretium nec viverra odio. Phasellus sollicitudin sed risus sit amet feugiat. Ut tristique, eros nec egestas suscipit, massa arcu imperdiet purus, eget porta sapien lacus id lacus. Vivamus dapibus laoreet ante, vitae aliquam lectus pretium in. Aliquam dictum est enim, id mattis sem tristique in. Donec est orci, commodo nec erat tincidunt, vulputate fermentum purus. </p>

        <p>Morbi fermentum magna in nunc lacinia, ut bibendum urna tempus. Nulla facilisi. Phasellus fermentum at augue nec congue. Donec ac mi sed odio egestas ultricies nec vel ligula. Phasellus iaculis tellus ligula, ut placerat ante scelerisque at. Nam egestas odio molestie, elementum nisl vel, semper sem. Donec molestie est ut ipsum sollicitudin feugiat. Mauris porttitor felis hendrerit, maximus nibh sit amet, cursus dolor. Nam feugiat ligula vel lectus commodo, eu dapibus felis rhoncus. Donec id tincidunt sem. Cras in varius diam, vel luctus augue. Fusce a sagittis ligula.</p>

        <p>Fusce malesuada mi at purus maximus gravida. Vivamus a enim eget risus vehicula semper. Integer vulputate volutpat vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet metus non risus eleifend volutpat a id urna. Sed pretium porttitor euismod. Vivamus imperdiet purus libero, in commodo neque euismod vitae. In blandit leo augue, ut dictum purus imperdiet in. Etiam semper ante nisl.</p>

        <p>Nulla quis dolor ornare, malesuada elit quis, tristique mauris. Phasellus urna erat, finibus ut malesuada ac, viverra a lectus. Donec mollis nunc vehicula nibh vestibulum, tristique imperdiet tellus congue. Donec a tortor dolor. Sed nec mauris non mi auctor blandit. Praesent at risus ante. Donec lobortis, nibh quis varius egestas, neque nisi lobortis eros, ac varius quam nibh quis tellus. Aenean magna sem, ornare ut turpis sit amet, pretium consectetur lacus. In vel libero aliquam, commodo dui congue, maximus urna. Maecenas sed eros vitae magna dignissim pretium quis vitae lorem. Duis hendrerit, leo in facilisis fringilla, nibh risus aliquet ante, at porta sem nunc sed tortor. Donec eu ultrices velit. Duis vitae ipsum augue. Vivamus ac nisl non diam viverra viverra eget in orci. Sed nec tellus congue sapien convallis pretium. Curabitur gravida mattis velit, sit amet posuere metus lobortis eget.</p>

        <p>Phasellus sed neque eu libero viverra porttitor sit amet quis mauris. Maecenas ut iaculis dolor. Quisque sed augue vel urna laoreet convallis vitae a neque. Aenean facilisis dolor enim, in maximus risus imperdiet sit amet. Nam diam massa, semper at varius eget, consequat sed sapien. Nunc vitae dui varius massa suscipit fermentum at ac dui. Sed in efficitur nunc.</p>
      </section>

    </div>

  )
}

export default PageHome