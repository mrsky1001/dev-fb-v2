<script>
    import photo from '$lib/images/photo-1606107557195-0e29a4b5b4aa.jpg';
</script>

<section>
    <div class="title-container">
        <div class="title">
            <h1>
                FOMA-BLOG
            </h1>
        </div>
        <ul class="menu-bar">
            <li>-- О нас</li>
            <li>-- Разделы</li>
            <li>-- Контакты</li>
            <li>-- Лавка</li>
        </ul>
    </div>
</section>

<style lang="scss">
    section{
        position: relative;
        width: 100%;
        height: 100%;

      .title-container{
        position: relative;
        width: 45%;
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;

        .title{
          position: relative;
          font-size: 6vw;
          border-bottom: 4px solid;
          padding: 0 0 0 10%;
        }

        .menu-bar{
          position: relative;
          font-size: 1.8vw;
          padding: 5% 10%;
          display: flex;
          flex-direction: column;
          > * {
            padding-bottom: 3%;
          }
        }
      }

    }




</style>
