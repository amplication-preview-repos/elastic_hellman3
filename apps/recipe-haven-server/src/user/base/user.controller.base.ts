/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { RecipeFindManyArgs } from "../../recipe/base/RecipeFindManyArgs";
import { Recipe } from "../../recipe/base/Recipe";
import { RecipeWhereUniqueInput } from "../../recipe/base/RecipeWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { UserProfileFindManyArgs } from "../../userProfile/base/UserProfileFindManyArgs";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/recipes")
  @ApiNestedQuery(RecipeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async findRecipes(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Recipe[]> {
    const query = plainToClass(RecipeFindManyArgs, request.query);
    const results = await this.service.findRecipes(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        ingredients: true,
        steps: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recipes")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectRecipes(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecipeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipes: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recipes")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateRecipes(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecipeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipes: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recipes")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectRecipes(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RecipeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recipes: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        comment: true,
        createdAt: true,
        id: true,
        rating: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectReviews(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userProfiles")
  @ApiNestedQuery(UserProfileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async findUserProfiles(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserProfile[]> {
    const query = plainToClass(UserProfileFindManyArgs, request.query);
    const results = await this.service.findUserProfiles(params.id, {
      ...query,
      select: {
        bio: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
