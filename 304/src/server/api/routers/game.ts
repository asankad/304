import { createTRPCRouter, publicProcedure } from "../trpc";

export const gameRouter = createTRPCRouter({
    join: publicProcedure.query(({ ctx }) => {
        let game = ctx.db.game.findFirst({
            where: {
                status: 0
              }
            });
                       
            if(!game){
                game = ctx.db.game.create({
                    data: {
                      status: 0
                    },
                  })
            }
return game;
      }),
});